export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "kylechen"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "ka"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (largest) {
    const x: number = parseInt(largest[1]);
    const y: number = parseInt(largest[2]);
    const z: number = parseInt(largest[3]);
    return (Math.max(x,y,z)).toString();
  }

  const product = query.match(/What is (\d+) multiplied by (\d+)?/);
  if (product) {
    const x: number = parseInt(product[1]);
    const y: number = parseInt(product[2]);
    return (x * y).toString();
  }


  return "";
}
