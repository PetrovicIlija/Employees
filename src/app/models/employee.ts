export class Employee {
    private _firstName: string | undefined;
    public get firstName(): string | undefined {
        return this._firstName;
    }
    public set firstName(value: string | undefined) {
        this._firstName = value;
    }

    private _lastName: string | undefined;
    public get lastName(): string | undefined {
        return this._lastName;
    }
    public set lastName(value: string | undefined) {
        this._lastName = value;
    }

    private _jobTitle: string | undefined;
    public get jobTitle(): string | undefined {
        return this._jobTitle;
    }
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    }

    private _dateOfBirth: Date | undefined;
    public get dateOfBirth(): Date | undefined {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: Date | undefined) {
        this._dateOfBirth = value;
    }

    constructor(data?: {
        firstName: string,
        lastName: string,
        jobTitle: string,
        dateOfBirth: Date,
    } | Employee) {
        if (data) {
            if (data.firstName) {
                this.firstName = data.firstName;
            }
            if (data.lastName) {
                this.lastName = data.lastName;
            }
            if (data.jobTitle) {
                this.jobTitle = data.jobTitle;
            }
            if (data.dateOfBirth) {
                this.dateOfBirth = data.dateOfBirth;
            }
        }
    }

}