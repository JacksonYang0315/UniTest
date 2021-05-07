f = open("C:/Users/ChiaJuiYang/Desktop/FMIDS.txt", 'r')

for line in f.readlines():                        
    line = line.strip()
    print("SCOPE   = "+line)