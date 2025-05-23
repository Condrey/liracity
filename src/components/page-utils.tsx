interface PageTitleProps {
  heading: string;
}
export  function PageTitle({ heading }: PageTitleProps) {
  return <h1 className="text-2xl font-bold capitalize tracking-tighter">{heading}</h1>;
}

interface PageDescriptionProps {
    paragraph: string;
  }
export function PageDescription ({paragraph}:PageDescriptionProps){
    return  <p className="max-w-3xl tracking-wide  text-balance hyphens-auto w-full ">
    {paragraph}
  </p>
}