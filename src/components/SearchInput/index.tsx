import { useRef } from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchInputProps = {
  // @ts-ignore::Property 'query' does not exist on type '{ query: string; } | undefined'.ts(2339)
  onSearch: ({ query }?: { query: string }) => any
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchRef = useRef('')
  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onSearch({ query: searchRef.current })
  }

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const textValue = e.target.value
    searchRef.current = textValue
    textValue === '' && onSearch()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      borderBottom={'0.5px solid'}
      borderColor={'grey.500'}
      sx={{
        maxWidth: { md: '20rem', sm: '100%', xs: '100%' },
      }}
    >
      <InputBase
        onChange={handleTextChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by name or assembly id"
        inputProps={{ 'aria-label': 'search by name or assembly id' }}
      />
      <IconButton
        onClick={handleSubmit}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default SearchInput
