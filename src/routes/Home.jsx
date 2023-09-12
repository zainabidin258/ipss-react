import Collage from "@/components/Collage";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
const Home = () =>{
    return (
        <>
            <Header><h1>Dashboard</h1></Header>
            <ProtectedRoute>
                <Collage/>
            </ProtectedRoute>
        </>
    )
};
export default Home;