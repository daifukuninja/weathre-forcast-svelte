export const getWeatherAsync = async <T>(endpoint: string, place: string): Promise<T> => {

    const API_USER = import.meta.env.VITE_WORKER_USER;
    const API_PASS = import.meta.env.VITE_WORKER_PASS;
    const serverURL = `${endpoint}${place}`;

    return new Promise<T>(function (resolve, reject) {
        
        const auth = window.btoa(`${API_USER}:${API_PASS}`);

        var req = new XMLHttpRequest();
        req.open("GET", serverURL);
        req.setRequestHeader("Authorization", "Basic " + auth);

        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });

}