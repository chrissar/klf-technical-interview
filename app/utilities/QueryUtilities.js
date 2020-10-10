export default class QueryUtilities {
    async sanitizeQuery(query) {
        let sanitizedQuery = query;
        for (let key in query) {
            if (key !== 'password' || key !== '_id') {
                sanitizedQuery[key] = new RegExp(query[key], 'i');
            }
        }
        return sanitizedQuery;
    }
}