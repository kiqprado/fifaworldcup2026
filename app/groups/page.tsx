import GroupsClientPage from './groups-client-page'

interface IPageProps {
  searchParams: Promise<{
    team?: string
  }>
}

export default async function GroupsPage({
  searchParams,
}: IPageProps) {
  const params = await searchParams

  return (
    <GroupsClientPage
      teamCode={params.team}
    />
  )
}