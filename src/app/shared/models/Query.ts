export interface Query{
    id:string
    question: string;
    answers: Map<string,number>;
    public: boolean;
    verified: boolean;

}   