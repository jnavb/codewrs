import math

def binary(items, value):
	startIndex = 0
	stopIndex = len(items) - 1
	middle = math.floor((stopIndex + startIndex)/2)

	while(items[middle] != value and startIndex < stopIndex):
		if value < items[middle]:
			startIndex = middle + 1
		else:
			stopIndex = middle - 1
		middle = math.floor((stopIndex + startIndex)/2)
	
	if (items[middle] == value or items[middle] < value):
		return middle
	else:
		return middle + 1

def leaderboard_climb(scores, kara):
	ranking = list(reversed(sorted(set(scores))))
	karaScores = []
	for x in kara:
		karaScores.append(binary(ranking, x) + 1)
	return karaScores
