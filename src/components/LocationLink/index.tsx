import { Link } from '@mui/material'

type LocationLinkProps = {
  venue: {
    location: string
    coordinates: number[]
    description: string
    venueName: string
    city: string
    country: string
  }
}

const LocationLink = ({ venue }: LocationLinkProps) => (
  <Link
    color={'primary'}
    href={`https://maps.google.com/?q=${venue.coordinates[0]},${venue.coordinates[1]}`}
    target={'_blank'}
    rel={'noopener noreferrer'}
  >
    {venue.location}
  </Link>
)

export default LocationLink
