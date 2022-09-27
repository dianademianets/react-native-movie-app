import {axiosService} from './axios';

export const moviesService = {
    getAllPage: (page) => axiosService.get(`/discover/movie?page=${page}`),
    getById: (id) => axiosService.get(`/movie/${id}`),
    getPopularMovie: () => axiosService.get(`/discover/movie?sort_by=popularity.desc`),
    getRatedMovie: () => axiosService.get(`/discover/movie?sort_by=vote_average.desc`),
    getSearchResponse: (param, page) => axiosService.get(`/search/movie?query=${param}&page=${page}`),
    getVideo: (id) => axiosService.get(`/movie/${id}/videos`),
}
