import { InstagramIcon } from "@/components/instagram-icon";
import { FacebookIcon } from "@/components/facebook-icon";

export default function Menu() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center w-1/2 indent-4">
        <p className="text-r-text text-xl">
          We will feature a small rotating menu on a pop-up by pop-up basis, check socials for our current offerings!
        </p>

        <div className="flex flex-col items-center">
          <div className="flex mt-6">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}