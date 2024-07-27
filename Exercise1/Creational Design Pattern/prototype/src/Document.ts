interface Prototype {
    clone(): Prototype;
}

class Document implements Prototype {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    public clone(): Prototype {
        return new Document(this.content);
    }
}

export { Document };
