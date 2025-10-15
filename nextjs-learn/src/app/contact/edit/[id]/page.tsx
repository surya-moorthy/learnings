export default async function page({params} : {params : Promise<{id : string}>}) {

    const {id} = await params;

    return (
        <div>
              Dynamic Routing {id}
        </div>
    )
}