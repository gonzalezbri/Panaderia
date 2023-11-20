import EditBreadForm from "../../components/EditBreadForm";

const getBreadById = async(id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/breads/${id}`,{
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("failed to fetch Bread Item");
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
};

export default async function EditBread({params}) {
    const {id} = params;
    const {bread} = await getBreadById(id);
    const {title,price,description} = bread;

    return(
        <EditBreadForm id={id} title={title} price={price} description={description} />
    );
};
