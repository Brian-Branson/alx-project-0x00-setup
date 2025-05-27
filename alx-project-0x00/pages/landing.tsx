import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

          <div className="flex gap-2">
          <Button title="Small Round-sm" size="small" shape="rounded-sm" />
          <Button title="Small Round-md" size="small" shape="rounded-md" />
          <Button title="Small Round-full" size="small" shape="rounded-full" />
        </div>

        <div className="flex gap-2">
          <Button title="Medium Round-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Round-md" size="medium" shape="rounded-lg" />
          <Button title="Medium Round-full" size="medium" shape="rounded-full" />
        </div>

        <div className="flex gap-2">
          <Button title="Large Round-sm" size="large" shape="rounded-sm" />
          <Button title="Large Round-md" size="large" shape="rounded-md" />
          <Button title="Large Round-full" size="large" shape="rounded-full" />
        </div>
      </div>
  )
}
export default Landing