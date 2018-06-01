function makeColTitle(name, delimiter)
{
  var lowerCased = ["of", "at", "the", "a", "an"];
  var colNameParts = name.split(delimiter);
  var part, title = ''; 
  for(part in colNameParts) 
  {
     if(lowerCased.indexOf(colNameParts[part]) > -1)
        title += colNameParts[part] + " ";
     else
        title += colNameParts[part].charAt(0).toUpperCase() 
                  + colNameParts[part].substr(1) + " ";
  }
  return title;
}


