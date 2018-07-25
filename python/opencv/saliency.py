# import cv2
# # import numpy as np
# image = cv2.imread("images/kWh.jpg")
# #
# # initialize OpenCV's static fine grained saliency detector and
# # compute the saliency map
# saliency = cv2.saliency.StaticSaliencyFineGrained_create()
# (success, saliencyMap) = saliency.computeSaliency(image)
#
# # if we would like a *binary* map that we could process for contours,
# # compute convex hull's, extract bounding boxes, etc., we can
# # additionally threshold the saliency map
# threshMap = cv2.threshold(saliencyMap, 0, 255,
# 	cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
#
# # image = cv2.imwrite("images/saliencyMap.jpg", saliencyMap)
#
# # show the images
# cv2.imshow("Image", image)
# cv2.imshow("Output", saliencyMap)
# cv2.imshow("Thresh", threshMap)
# cv2.waitKey(0)
#
# src = cv.imread("images/saliencyMap.jpg", cv.IMREAD_COLOR)
#
# gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
#
#
# gray = cv.medianBlur(gray, 5)
#
#
# rows = gray.shape[0]
# circles = cv.HoughCircles(gray, cv.HOUGH_GRADIENT, 0.6, rows / 16, param1=100, param2=30, minRadius=50, maxRadius=80)
#
#
# if circles is not None:
# 	circles = np.uint16(np.around(circles))
# 	for i in circles[0, :]:
# 		center = (i[0], i[1])
# 		# circle center
# 		cv.circle(src, center, 1, (0, 100, 100), 3)
# 		# circle outline
# 		radius = i[2]
# 		inss = cv.circle(src, center, radius, (255, 0, 255), 3)
#
# 		# Test writing out the found circles
# 		# cv.imwrite("images/test-{}.jpg".format(i),inss)
#
# 	cv.imshow("detected circles", src)
# 	cv.waitKey(0)
# cv2.imshow("Output", img)
# cv2.waitKey(0)
# cimg = cv2.cvtColor(img,cv2.COLOR_GRAY2BGR)
# circles = cv2.HoughCircles(img,cv2.HOUGH_GRADIENT, 0.1, 50)
# print(circles)
#
# circles = np.uint16(np.around(circles))
# for i in circles[0,:]:
#     # draw the outer circle
#     cv2.circle(cimg,(i[0],i[1]),i[2],(0,255,0),2)
#     # draw the center of the circle
#     cv2.circle(cimg,(i[0],i[1]),2,(0,0,255),3)
#
# cv2.imshow('detected circles',cimg)
# cv2.waitKey(0)
# cv2.destroyAllWindows()


### THIS IS GOOD
import cv2 as cv
print cv.__version__
import numpy as np
src = cv.imread("images/saliencyMap.jpg", cv.IMREAD_COLOR)

gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)


gray = cv.medianBlur(gray, 5)


rows = gray.shape[0]
circles = cv.HoughCircles(gray, cv.HOUGH_GRADIENT, 0.6, rows / 16, param1=100, param2=30, minRadius=50, maxRadius=80)


if circles is not None:
	circles = np.uint16(np.around(circles))
	for i in circles[0, :]:
		center = (i[0], i[1])
		# circle center
		cv.circle(src, center, 1, (0, 100, 100), 3)
		# circle outline
		radius = i[2]
		inss = cv.circle(src, center, radius, (255, 0, 255), 3)

		# Test writing out the found circles
		# cv.imwrite("images/test-{}.jpg".format(i),inss)

	cv.imshow("detected circles", src)
	cv.waitKey(0)
