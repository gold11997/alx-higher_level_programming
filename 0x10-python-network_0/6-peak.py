#!/usr/bin/python3
def find_peak(list_of_integers):
  if len(list_of_integers) == 0:
    return None
  elif len(list_of_integers) == 1:
    return list_of_integers[0]
  else:
    mid = len(list_of_integers) // 2
    peak = list_of_integers[mid]

    if peak > list_of_integers[mid-1] and peak > list_of_integers[mid+1]:
      return peak
    else:
      if peak < list_of_integers[mid-1]:
        return find_peak(list_of_integers[:mid])
      else:
        return find_peak(list_of_integers[mid+1:])

