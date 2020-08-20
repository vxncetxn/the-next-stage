import Artefact from "./";

export default {
  title: "Docs/Artefact",
  component: Artefact,
};

const Template = (args) => (
  <div style={{ width: "50vw", height: "50vw" }}>
    <Artefact {...args} />
  </div>
);

export const Interaction = Template.bind({});
Interaction.args = {
  form: `[{"vertices":[[0,1,0],[-1,0,4],[2,0,1],[-4,0,-3]],"color":"rgb(248, 67, 48)","position":[-5,1,-7],"rotation":[0.65,2.96,5.69]},{"vertices":[[0,2,0],[-1,0,2],[3,0,1],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[7,-3,-1],"rotation":[0.67,3.61,1.95]},{"vertices":[[0,1,0],[-1,0,3],[4,0,-1],[-3,0,-4]],"color":"rgb(238, 9, 121)","position":[3,-6,-7],"rotation":[2.57,0.92,3.99]},{"vertices":[[0,2,0],[-1,0,2],[2,0,0],[-3,0,-4]],"color":"rgb(248, 67, 48)","position":[4,7,5],"rotation":[4.36,0.75,5.13]},{"vertices":[[0,2,0],[0,0,2],[4,0,0],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[7,5,1],"rotation":[1.8,6.01,4.4]},{"vertices":[[0,2,0],[1,0,3],[4,0,-1],[-2,0,-3]],"color":"rgb(255, 106, 0)","position":[-6,6,-1],"rotation":[0.94,2.8,1.25]},{"vertices":[[0,3,0],[-1,0,2],[4,0,1],[-2,0,-2]],"color":"rgb(238, 9, 121)","position":[7,-6,0],"rotation":[0.26,1.39,4.36]},{"vertices":[[0,3,0],[0,0,3],[3,0,1],[-3,0,-2]],"color":"rgb(252, 87, 24)","position":[1,6,-6],"rotation":[3.31,1.77,3.62]},{"vertices":[[0,3,0],[-1,0,2],[4,0,-1],[-2,0,-4]],"color":"rgb(248, 67, 48)","position":[-1,-4,-2],"rotation":[0.65,3.93,5.14]},{"vertices":[[0,2,0],[0,0,4],[3,0,0],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[-3,-6,-5],"rotation":[5.38,4.12,5.2]},{"vertices":[[0,2,0],[1,0,2],[3,0,-1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[4,-1,1],"rotation":[1.89,3.97,4.29]},{"vertices":[[0,2,0],[-1,0,4],[4,0,1],[-2,0,-3]],"color":"rgb(255, 106, 0)","position":[-2,-1,3],"rotation":[0.49,1.19,0.89]},{"vertices":[[0,1,0],[-1,0,3],[4,0,1],[-4,0,-3]],"color":"rgb(238, 9, 121)","position":[-2,-6,0],"rotation":[0.39,5.16,6.11]},{"vertices":[[0,1,0],[0,0,4],[4,0,-1],[-3,0,-4]],"color":"rgb(252, 87, 24)","position":[2,-5,3],"rotation":[1.42,1.23,2.87]},{"vertices":[[0,3,0],[0,0,4],[3,0,-1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[-6,-1,-6],"rotation":[0.8,2.39,5.53]},{"vertices":[[0,2,0],[-1,0,3],[3,0,-1],[-4,0,-2]],"color":"rgb(241, 28, 97)","position":[-6,-4,-1],"rotation":[1.9,4.76,2.58]},{"vertices":[[0,3,0],[-1,0,4],[3,0,1],[-3,0,-3]],"color":"rgb(238, 9, 121)","position":[2,4,7],"rotation":[5.06,0.34,0.88]},{"vertices":[[0,2,0],[-1,0,4],[2,0,-1],[-2,0,-4]],"color":"rgb(252, 87, 24)","position":[0,-1,-6],"rotation":[3.63,1.93,3.68]},{"vertices":[[0,1,0],[0,0,2],[2,0,1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[6,-6,1],"rotation":[6.24,4.61,2.49]},{"vertices":[[0,1,0],[-1,0,2],[2,0,0],[-4,0,-3]],"color":"rgb(255, 106, 0)","position":[3,5,3],"rotation":[4.15,6,4.56]}]`,
};
