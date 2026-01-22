export const getBlogFromResponse = (res) => {
    return res?.data?.blog || res?.data || null;
};
