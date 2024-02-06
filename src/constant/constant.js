export class PortfolioEntity {
    constructor(title, description,image) {
        this.title = title
        this.description = description
        this.image = image
    }
}

const Constant = {
    Title: "Senior Back-end Developer",
    Description: [
        "Master of information technology at FPT University",
        "Senior Back-end Developer with nearly 5 years of experience in developing and building back-end applications using Golang, NodeJS and Python. Design and build large-scale systems and microservices architecture",
        "Back-end Engineer for large-scale systems at large technology companies Sendo, GiaoHangNhanh",
        "Devops Engineer with nearly 2 years , have certificates of AWS Developer Associate DVA-C02 and AWS Devops Professional DOP-C02",
        "AI Engineer with 1 and a half years , have basic knowledge about training deep learning models and NLP based on Neural Network and its variations. Have deep learning certifications on coursera",
    ],
    ImageUrl: "/image_me.png",
    Portfolio: {
        WebApp: [
            new PortfolioEntity("Order Management System", "Design and develop Order Management System at Sendo Company using Golang. Use ElasticSearch for order search feature and Message-Queue, Pub/Sub model for order synchronization","/order_mgt.png"),
            new PortfolioEntity("Order Statistics System", "Design and develop Order Statistics System at Sendo Company using Golang and Python. Apply Airflow and PySpark for data collection, analysis, and data modeling. Use Postgre Timescaled DB to store real-time data and retrieve analytics data by timeline","order_statistics.png"),
        ],
        AI: [
            new PortfolioEntity("Food Ingredients Detection", "Train the AI model to detect food ingredients using YOLO v8, build a dish recommendation system from recognized ingredients. Data is marked and stored on Roboflow","/detection.jpg"),
            new PortfolioEntity("Smart House Demo", "Train AI models to analyze voice, analyze gestures, and predict to automate features in the home, manage and suggest to family members.","/smarthouse.webp"),
        ],
        Devops: [
            new PortfolioEntity("Deploy microservices system with Kubernetes", "Deploy Microservices system to Kubernetes, using tools such as Docker, Jenkins, Circle-ci, Terraform","/k8s_micro.png"),
            new PortfolioEntity("Design and deploy CI/CD Pipelines on Cloud", "Deploy and integrate CI/CD applications into Google and AWS services.","/cicd.png"),
        ],
        DataScience: [
            new PortfolioEntity("Recommendation System", "Collect and model data, use algorithms and techniques such as Cosine Similarity, User-based/Item-based Collaborative to build a recommendation system","/recommendation.png"),
        ]
    },
    Services: {
        WebServer:{
            Title: "Backend Server",
            Description:"Have nearly 5 years of experience building and deploying back-end applications and APIs in 3 languages Golang, NodeJS and Python. Good understanding of microservices model and large-scale system."
        },
        AI:{
            Title: "Artificial Intelligence",
            Description:"Research and Train Artificial Intelligent models about object detection, image classification, and predition by  neural network and some different variant likes CNN, RNN, YOLO. Have general knowledge about some AI libraries or tools likes MediaPipe, Roboflow."
        },
        Devops:{
            Title: "Devops",
            Description:"Have general knowledge about devops and deploying applications to the cloud such as AWS and GCP. Integrate CI/CD pipeline for automated and continuous application deployment. Certified in AWS Develop Associate DVA-C02."
        },
        Data:{
            Title: "Data Science",
            Description:"Research, explore and visualize data, apply machine learning techniques to train machine learning models and build recommendation systems"
        }
    },
    Phone:"0946515847",
    Location:"Phu Nhuan, Ho Chi Minh City, VietName",
    Email:"tqhuy1996.developer@gmail.com"
};

export default Constant;