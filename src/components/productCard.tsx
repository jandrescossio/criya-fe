import Button from '@/components/button'

export default function ProductCard () {
  return (
    <div className="flex flex-col rounded shadow bg-white">
      <div className="w-full h-72 bg-gray-200"></div>
      <div className="px-3 py-2.5">
        <div className="mb-2">
          <div className="font-semibold text-gray-800">The Home Depot</div>
          <label className="text-gray-400 italic text-sm">Black, Orange and Blue</label>
        </div>
        <p className="text-gray-500 text-sm mb-3">Donec posuere vulputate arcu. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Ut id nisl quis enim dignissim sagittis. Nam adipiscing. Aenean vulputate eleifend tellus.</p>

        <Button className="w-full" intent="warning">Open in store</Button>
      </div>
    </div>
  )
}