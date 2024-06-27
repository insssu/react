/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStydyPage/RouteStudyPage";
import HomPage from "../../pages/HomePage/HomPage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudy/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";




function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomPage />}/>
                <Route path="/routestudy/*" element={<RouteStudyPage />}/>
                <Route path="/params/:name/*" element={<ParamsStudyPage />} />
                <Route path="/searchParams" element={<SearchParamsStudy />} />
                <Route path="/customhook/:id" element={<CustomHookPage />} />
                <Route path="/memoization" element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;