import { FormProps } from "@/types/types"

const Form: React.FC<FormProps> = ({ values, handleChange, handleSubmit, generatedPassword, hasCharacterLength }) => {
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
      <div className="text-center p-7">
        <p className="text-xl md:text-2xl p-4">Current Length: {values.length}</p>
        {generatedPassword && (
          <p className="text-center p-4 text-xl text-green-300">{generatedPassword}</p>
        )}
        {hasCharacterLength &&
          <div className="flex justify-center p-4" style={{ width: '100%' }}>
            <p>10</p>
            <input
              id="length"
              name="length"
              value={values.length}
              onChange={handleChange}
              type="range"
              min={10}
              max={40}
            />
            <p>40</p>
          </div>
        }
      </div>

      <div className="flex flex-col justify-center items-center max-w-60 mx-auto md:max-w-none md:ml-0 md:flex-row md:justify-around p-4 text-md md:text-lg" style={{ backgroundColor: '#23262d' }}>
        <div className="md:pr-4">
          <label htmlFor="includeUpperCase">Include UpperCase </label>
          <input
            id="includeUpperCase"
            name="includeUpperCase"
            type="checkbox"
            checked={values.includeUpperCase}
            onChange={handleChange}
            className="mb-7 md:mb-0 cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="includeLowerCase">Include LowerCase </label>
          <input
            id="includeLowerCase"
            name="includeLowerCase"
            type="checkbox"
            checked={values.includeLowerCase}
            onChange={handleChange}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-60 mx-auto p-4 md:mt-4 text-md md:max-w-none md:ml-0 md:flex-row md:justify-around md:text-lg" style={{ backgroundColor: '#23262d' }}>
        <div className="pr-1 md:pr-10">
          <label htmlFor="includeNumber">Include Number</label>
          <input
            id="includeNumber"
            name="includeNumber"
            type="checkbox"
            checked={values.includeNumber}
            onChange={handleChange}
            className="ml-2 mb-7 md:mb-0 cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="includeSymbols">Include Symbol </label>
          <input
            id="includeSymbols"
            name="includeSymbols"
            type="checkbox"
            checked={values.includeSymbols}
            onChange={handleChange}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-center p-4 text-xl">
        <button type="submit" className="rounded-md p-2 button-style">Generate Password</button>
      </div>
    </form>
  )
}

export default Form
