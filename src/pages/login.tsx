import Card from '@/components/card'
import Button from '@/components/button'
import Input from '@/components/input'

export default function Login () {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md w-full">
        <Card title="Login">
          <div className="flex flex-col gap-2">
            <Input className="w-full" placeholder="Email" label="Email" type="email" name="email" id="email" />
            <Input className="w-full mb-5" placeholder="Password" label="Password" type="password" name="password" id="password" />
            <Button className="w-full" intent="primary" type="submit">Sign In</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}