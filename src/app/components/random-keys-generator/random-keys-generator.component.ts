import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'random-keys-generator',
    templateUrl: 'random-keys-generator.component.html',
    styleUrls: ['random-keys-generator.component.css']
})

export class RandomKeysGeneratorComponent implements OnInit {
    LIST_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    FORBIDDEN_SHARPS_IN_NOTES = ['B', 'E']; // B# and E# are not relevant
    FORBIDDEN_FLATS_IN_NOTES = ['C', 'F']; // Cb and Fb are not relevant
    CIRCLE_OF_FIFTHS = ['F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Gb', 'Db', 'Ab', 'Eb', 'Bb'];
    CHROMATIC_SCALE = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    randomOptions = ['BLUES', 'THIRDS', 'FOURTHS', 'FIFTHS', 'RANDOM'];

    keysArray: Array<string>; // Array of keys, autogenerated
    endTime: Date;
    totalDuration = 0; // Total duration in minutes

    @Input() specialProgression: string = 'RANDOM'; // BLUES, THIRDS, FIFTHS, etc
    @Input() useSharpsAndFlats: boolean; // If true, the keys could have sharps and flats
    @Input() numberOfKeys = 3; // Number of keys to be generated

    ngOnInit(): void {
        this.generateKeys();
    }

    generateKeys(): void {
        this.keysArray = [];
        if (!this.specialProgression) {
            this.generateRandomKeys();
        } else if (this.specialProgression === 'BLUES') {
            this.generateKeysBlues();
        } else if (this.specialProgression === 'THIRDS') {
            this.generateKeysThirds();
        } else if (this.specialProgression === 'FOURTHS') {
            this.generateKeysFourths();
        } else if (this.specialProgression === 'FIFTHS') {
            this.generateKeysFifths();
        } else if (this.specialProgression === 'RANDOM') {
            this.generateRandomKeys();
        } else {
            this.generateRandomKeys();
        }
    }

    private generateKeysThirds(): void {
        let index = Math.floor((Math.random() * this.CHROMATIC_SCALE.length));
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 4;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);

        index += 3;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
    }

    private generateKeysFifths(): void {
        let index = Math.floor((Math.random() * this.CIRCLE_OF_FIFTHS.length));
        this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);

        while (this.keysArray.length < this.numberOfKeys) {
            if ((index + 1) === this.CIRCLE_OF_FIFTHS.length) {
                index = 0;
            } else {
                index++;
            }
            this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        }
    }

    private generateKeysFourths(): void {
        let index = Math.floor((Math.random() * this.CIRCLE_OF_FIFTHS.length));
        this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);

        while (this.keysArray.length < this.numberOfKeys) {
            if ((index - 1) < 0) {
                index = (this.CIRCLE_OF_FIFTHS.length -1);
            } else {
                index--;
            }
            this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        }
    }

    private generateKeysBlues(): void {
        let index = Math.floor((Math.random() * this.CHROMATIC_SCALE.length));
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 5;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);

        index += 2;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
    }

    private generateRandomKeys(): void {
        const firstKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        let secondKeyIndex = firstKeyIndex;

        let forbiddenKeys = this.forbidAdyacentKeysToIndex(firstKeyIndex);

        while (forbiddenKeys.includes(secondKeyIndex)) {
            secondKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        }
        forbiddenKeys = forbiddenKeys.concat(this.forbidAdyacentKeysToIndex(secondKeyIndex));

        let thirdKeyIndex = secondKeyIndex;
        while (forbiddenKeys.includes(thirdKeyIndex)) {
            thirdKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        }

        this.keysArray = [this.addAlterationsToNote(this.LIST_KEYS[firstKeyIndex]),
                    this.addAlterationsToNote(this.LIST_KEYS[secondKeyIndex]),
                    this.addAlterationsToNote(this.LIST_KEYS[thirdKeyIndex])];
    }

    private forbidAdyacentKeysToIndex(chosenIndex: number): Array<number> {
        // Forbidden keys will be the generated key and the keys adyacent to the firstKey generated
        const forbiddenKeys = [chosenIndex];
        // Forbid the key before the one that was generated
        if (chosenIndex === 0) {
            forbiddenKeys.push(this.LIST_KEYS.length-1);
        } else {
            forbiddenKeys.push(chosenIndex-1);
        }
        // Forbid the key after the one that was generated
        if (chosenIndex + 1 === this.LIST_KEYS.length) {
            forbiddenKeys.push(0);
        } else {
            forbiddenKeys.push(chosenIndex+1);
        }
        return forbiddenKeys;
    }

    private addAlterationsToNote(chosenNote: string): string {
        const randomNumber = Math.floor((Math.random() * 100)); // Number between 0 and 100

        if (!this.useSharpsAndFlats) {
            return chosenNote;
        }
        if (randomNumber <= 20 && !this.FORBIDDEN_FLATS_IN_NOTES.includes(chosenNote)) { // Flat the note
            return `${chosenNote}b`;
        } else if (randomNumber >= 80 && !this.FORBIDDEN_SHARPS_IN_NOTES.includes(chosenNote)) { // Sharp the note
            return `${chosenNote}#`;
        }
        return chosenNote;
    }
}
