import { PrebuiltFormProps } from "@/types/types"

const PrebuiltForm: React.FC<PrebuiltFormProps> = ({ items, addText, generatePassword }) => {
  return (
    <>
      <form onSubmit={addText}>
        <div className="flex flex-row justify-start p-4 ml-10 text-md md:text-lg max-w-96 truncate">
          {items.map((item, index) => (
            <div key={index} className="px-2">{item}</div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <input type="text" name="text" placeholder="Add your text" className="max-w-60 mx-auto text-black p-2 md:mr-4 rounded-md md:max-w-none" />
          <button type="submit" className="max-w-60 mx-auto mt-7 md:mt-0 rounded-md p-2 button-style w-22">ADD</button>
        </div>
      </form>

      <form>
        <div className="flex flex-col justify-center max-w-60 mx-auto mt-7 md:max-w-none md:ml-0 md:flex-row md:justify-around p-4 text-md md:text-lg" style={{ backgroundColor: '#23262d' }}>
          <div className="pr-4">
            <label htmlFor="includeUpperCase">Include Uppercase </label>
            <input
              id="includeUpperCase"
              name="includeUpperCase"
              type="checkbox"
              className="mb-7 md:mb-0"
            />
          </div>
          <div>
            <label htmlFor="includeLowerCase">Include LowerCase </label>
            <input
              id="includeLowerCase"
              name="includeLowerCase"
              type="checkbox"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-60 mx-auto md:max-w-none md:ml-0  md:flex-row md:justify-around p-4 mt-4 text-md md:text-lg" style={{ backgroundColor: '#23262d' }}>
          <div className="pr-10">
            <label htmlFor="includeNumber" className="pr-2">Include Number</label>
            <input
              id="includeNumber"
              name="includeNumber"
              type="checkbox"
              className="mb-7 md:mb-0"
            />
          </div>
          <div>
            <label htmlFor="includeSymbols">Include Symbols </label>
            <input
              id="includeSymbols"
              name="includeSymbols"
              type="checkbox"
            />
          </div>
        </div>

        {items.length > 0 &&
          <div className="flex justify-center p-4 text-xl">
            <button type="button" onClick={generatePassword} className="rounded-md p-2 button-style">Generate Password</button>
          </div>
        }
      </form>
    </>
  )
}

export default PrebuiltForm
