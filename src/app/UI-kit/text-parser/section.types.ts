export interface Section {
    title: string;
    content: string | Section[];
    anchor: string;
}