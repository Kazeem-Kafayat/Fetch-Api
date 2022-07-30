class FetchApi {
    async getUsers(urlEndPoint) {
        const response = await fetch(urlEndPoint);

        const responseData = await response.json();

        return responseData;
    }
}