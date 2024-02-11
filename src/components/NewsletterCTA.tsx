import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterCTA = () => {
    return (
        <section>
            <div>
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 border-y py-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative mx-auto flex max-w-lg flex-col items-center justify-center md:mx-0 md:items-start">
                        <h2 className="mb-2 text-3xl font-semibold text-gray-950 ">
                            Get the latest help center and CX inspiration,
                            weekly.
                        </h2>
                        <p className="text-lg">
                            We are continuingly adding to this list. Sign up to
                            get our weekly analysis and case studies and tips to
                            help you craft the best experiences to support your
                            customers.
                        </p>
                    </div>
                    <div className="max-w-full">
                        <div className="flex flex-col items-center md:flex-row md:space-x-2">
                            <Input
                                className="max-w-md p-6 text-lg"
                                type="email"
                                placeholder="Email"
                            />
                            <Button
                                type="submit"
                                className="mt-4 w-full max-w-md p-6 text-lg md:mt-0 md:w-40"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
