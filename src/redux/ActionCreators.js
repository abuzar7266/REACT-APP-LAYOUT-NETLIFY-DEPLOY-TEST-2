import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/Projects';
export const addProject = (userid,Title, Image, Text , Type , Duration) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: 
    {
        userId:userid,
        title:Title,
        image:Image,
        text:Text,
        type:Type,
        duration:Duration
    }
});


export const fetchProjects = () => (dispatch) => {

    dispatch(projectsLoading(true));

    setTimeout(() => {
        dispatch(addProjects(PROJECTS));
    }, 2000);
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});