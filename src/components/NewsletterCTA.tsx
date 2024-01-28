import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterCTA = () => {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-2 py-8 border-y items-center">
          <div className="flex flex-col max-w-lg mx-auto md:mx-0 justify-center items-center relative md:items-start">
            <h2 className="text-3xl font-semibold text-gray-950 mb-2 ">
              Get the latest help center and CX inspiration, weekly.
            </h2>
            <p className="text-base">
              We are continuingly adding to this list. Sign up to get our weekly
              analysis and case studies and tips to help you craft the best
              experiences to support your customers.
            </p>
          </div>
          <div className="max-w-full">
            <div className="flex flex-row w-full max-w-lg mx-auto justify-start items-center space-x-2">
              <Input className="text-lg p-6" type="email" placeholder="Email" />
              <Button type="submit" className="text-lg p-6">
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
