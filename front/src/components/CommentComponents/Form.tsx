const FormComment = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Commentaire(s)
        </h2>
      </div>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Commentaire
          </label>
          <textarea
            id="comment"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Ecrivez un commentaire..."
            required
          ></textarea>
        </div>
        <div className="flex justify-end items-center">
          <button className="btn btn-primary">Envoyer le commentaire</button>
        </div>
      </form>
    </div>
  );
};

export default FormComment;
