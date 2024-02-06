export class PortfolioEntity {
    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

const Constant = {
    Title: "Senior Back-end Developer",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ImageUrl: "/image_me.png",
    Portfolio: {
        WebApp: [
            new PortfolioEntity("Demo Web App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo Web App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        AI: [
            new PortfolioEntity("Demo AI App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo AI App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        Devops: [
            new PortfolioEntity("Demo Devops App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo Devops App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ],
        DataScience: [
            new PortfolioEntity("Demo DataScience App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
            new PortfolioEntity("Demo DataScience App", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum"),
        ]
    }
};

export default Constant;