import React from "react";
import { mount } from "react-mounter";

import { MainLayout } from "./layouts/MainLayout.jsx";
import DrillWrapper from "./DrillWrapper.jsx";


FlowRouter.route("/", {
    action() {
        mount(MainLayout, {
            content: (<DrillWrapper />)
    })
    }
});

// FlowRouter.route("/about", {
//     action() {
//         mount(MainLayout, {
//             content: (<About />)
//     })
//     }
// });
//
// FlowRouter.route("/resolutions/:id", {
//     action(params) {
//         mount(MainLayout, {
//             content: (<ResolutionDetail id={params.id} />)
//     })
//     }
// });