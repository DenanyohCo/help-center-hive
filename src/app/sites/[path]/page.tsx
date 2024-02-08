"use client";
import { usePathname } from 'next/navigation';
import { Site, Media } from '../../../payload-types';
import Image from 'next/image';
import { useQuery } from 'react-query';
import axios from 'axios';

const SitePage = () => {
    const pathName = usePathname();
    const path = pathName.split('/').pop();
    const { data: sites, isLoading, error } = useQuery('sites', () =>
        axios.get(`/api/sites`).then((res) => res.data)
    );
    const site = sites?.docs.find((site: Site) => site.path === path);
    return (
        <section className='container' >
            <h1>See All Inspiration</h1>
            <div>
                <div>
                    <Image
                        src={(site?.image as Media)?.url ?? ''}
                        alt={site?.name}
                        width="1500"
                        height="1500"
                        className="h-full w-full max-w-full"
                    />
                </div>
                <div>
                    <div>
                        <h1>{site?.name}</h1>
                        <p>{site?.description}</p>
                    </div>
                    <div>
                        ads
                    </div>
                </div>
            </div>
            <div>
                <h1>Similar Inspiration</h1>
            </div>
        </section>
    );
};

export default SitePage;