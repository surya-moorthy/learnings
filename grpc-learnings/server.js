import grpc from "@grpc/grpc-js"
const PROTO_PATH="./news.proto"
import protoLoader from "@grpc/proto-loader"

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH,options)
const newsPhoto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

let news = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
];

server.addService(newsPhoto.NewsService.service, {
    getAllNews: (_,callback) => {
        callback(null , {news});
    },
    insertNews : (call,callback) => {
        const _news = { id : Date.now().toString(), ...call.request }; 
        news.push(_news);
        callback(null , _news)
    },
    deleteNews : (_,callback) => {
        const newsId = _.request.id;
        news = news.filter(({id}) => {id => id !== newsId});
        callback(null , {})
    },
    editNews : (_,callback) => {
        const newsId = _.request.id;
        const newsItem = news.find(({id}) => id => newsId == id);
        newsItem.body = _.request.body;
        newsItem.postImage = _.request.postImage;
        newsItem.title = _.request.title;
        callback(null , newsItem);
    }

})

server.bindAsync(
    "localhost:50051",
    grpc.ServerCredentials.createInsecure(),
    (error ,port) => {
        console.log("Server is running at port http://localhost:50051");
    }
)
