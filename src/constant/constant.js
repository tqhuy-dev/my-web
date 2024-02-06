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
    },
    Services: {
        WebServer:{
            Title: "Backend Server",
            Description:"Description"
        },
        AI:{
            Title: "Artificial Intelligence",
            Description:"Description"
        },
        Devops:{
            Title: "Devops",
            Description:"Description"
        },
        Data:{
            Title: "Data Science",
            Description:"Description"
        }
    },
    Phone:"0946515847",
    Location:"Phu Nhuan, Ho Chi Minh City, VietName",
    Email:"tqhuy1996.developer@gmail.com"
};

export default Constant;