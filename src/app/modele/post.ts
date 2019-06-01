export class Post {
    title: string;
    content: string;
    created_at: Date;
    loveIts: number;

    constructor(title: string, content: string){
        this.title = title;
        this.content = content;
        this.created_at = new Date();
        this.loveIts = 0;
    }

    getLoveIts(){
        return this.loveIts;
    }

    like(){
        this.loveIts++;
    }

    dislike(){
        this.loveIts--;
    }
}
