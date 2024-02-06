export class PortfolioEntity{
    constructor(title,description){
        this.title = title
        this.description = description
    }
}

const Constant = {
    Title: "Senior Back-end Developer",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ImageUrl: "/image_me.png",
    Portfolio:{
        WebApp: [
            new PortfolioEntity("Demo App" , "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo App" , "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        AI:[],
        Devops:[],
        DataScience: []
    }
};

export default Constant;