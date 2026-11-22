import type { ResourceBlock } from "@/content/resources";

export function ResourceBody({ blocks }: { blocks: ResourceBlock[] }) {
  return (
    <div className="prose-care">
      {blocks.map((block, index) => {
        if (block.type === "p") return <p key={index}>{block.text}</p>;
        if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "steps") {
          return (
            <ol key={index} className="list-none space-y-5 pl-0">
              {block.items.map((step, stepIndex) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-purple font-semibold text-cream">
                    {stepIndex + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-nav">
                      {step.title}
                    </span>
                    <span className="mt-1 block">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          );
        }
        return (
          <ul key={index} className="list-disc">
            {block.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} rel="noreferrer" target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
