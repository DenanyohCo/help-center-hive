// metadataUtils.ts
import axios from 'axios';

export const generateMetadata = async (path: string) => {
    const { data: site } = await axios.get(`/api/websites/${path}`);
    return {
        title: site.name,
        description: site.description,
        image: site.image.url,
    };
};

