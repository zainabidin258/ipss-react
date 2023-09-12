import { Route , Routes } from "react-router-dom";
import Login from "@/routes/Login";
import NotMatch from "./NotMatch";
import Register from "@/routes/Register";
import Home from "@/routes/Home";
import Layout from "./Layout";
import UploadImage from "@/routes/UploadImage";
import ImageDetails from "@/routes/ImageDetails";
import Analysis from "@/routes/Analysis";
import PurchaseCredits from "@/routes/PurchaseCredits";
import CreditsHistory from "@/routes/CreditsHistroy";
import ProtectedRoute from "./ProtectedRoute";
const IpssApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<>
                        <Home/>
                        </>}></Route>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="register" element={<Register/>}></Route>
                    <Route path="uploadImage" element={<ProtectedRoute><UploadImage/></ProtectedRoute>}></Route>
                    <Route path="imageDetails" element={<ProtectedRoute><ImageDetails/></ProtectedRoute>}></Route>
                    <Route path="analysisReport" element={<ProtectedRoute><Analysis/></ProtectedRoute>}></Route>
                    <Route path="purchaseCredits" element={<ProtectedRoute><PurchaseCredits/></ProtectedRoute>}></Route>
                    <Route path="creditsHistory" element={<ProtectedRoute><CreditsHistory/></ProtectedRoute>}></Route>
                    <Route path="*" element={<NotMatch/>}/>
                </Route>    
            </Routes>
        </>
    );
};

export default IpssApp;