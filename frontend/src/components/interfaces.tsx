export enum ProgLan {
    C,
    Cpp,
    Java,
    Python,
    Javascript,
    Kotlin,
};

export interface Job {
    company: string;
    minSalary: number;
    maxSalary: number;
    languages: ProgLan[];
    "isRemote": boolean;
};
