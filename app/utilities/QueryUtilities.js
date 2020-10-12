export default class QueryUtilities {
    async sanitizeQuery(query) {
        let sanitizedQuery = query;
        for (let key in query) {
            if (key !== 'password' && key !== '_id') {
                sanitizedQuery[key] = new RegExp(query[key], 'i');
            }
            if (key === 'password') {
                // We don't want to allow search by password for now.
                delete sanitizedQuery[key];
            }
        }
        return sanitizedQuery;
    }
}