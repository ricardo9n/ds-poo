exports.fetchx = async function (url, init) {
    const {default: fetchx} = await import("node-fetch");
    return await fetchx(url, init);
};