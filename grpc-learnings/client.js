import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "./news.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

// If your proto has a package, for example: package news;
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const NewsService = protoDescriptor.NewsService;

const NewNews = {
    title : "title 1",
    body : "body 1",
    postImage : "ppagfweg"
}

const client = new NewsService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.GetAllNews({}, (error, news) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("News:", news);
  }
});

client.AddNews()

console.log("........");

client.InsertNews({})