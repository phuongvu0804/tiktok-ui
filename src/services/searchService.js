import * as request from '@/ultis/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const response = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
};
