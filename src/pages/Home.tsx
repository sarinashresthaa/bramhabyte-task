import { useProfile } from "@/hooks/useProfile"
import { Spinner } from "@/components/ui/spinner"
import ProfileCard from "@/components/ProfileCard"

const Home = () => {
  const { data, isLoading } = useProfile()

  console.log(data?.data)

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen p-4">
      <div className="w-full">
        {data?.data?.length === 0 ? (
          <div></div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {data?.data?.map((item, index) => (
                <ProfileCard key={index} user={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
